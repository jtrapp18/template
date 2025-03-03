"""adding reply model for forum

Revision ID: affc16331fa9
Revises: 54e5b62234a7
Create Date: 2025-02-08 21:47:59.133621

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'affc16331fa9'
down_revision = '54e5b62234a7'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('replies',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('message_id', sa.Integer(), nullable=False),
    sa.Column('reply_date', sa.DateTime(), nullable=True),
    sa.Column('reply_text', sa.Text(), nullable=False),
    sa.ForeignKeyConstraint(['message_id'], ['messages.id'], name=op.f('fk_replies_message_id_messages')),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], name=op.f('fk_replies_user_id_users')),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('replies')
    # ### end Alembic commands ###
