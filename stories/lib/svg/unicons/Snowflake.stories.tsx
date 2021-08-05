import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Snowflake, SnowflakePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Snowflake",
  component: Snowflake,
} as ComponentMeta<typeof Snowflake>;

const Template: ComponentStory<typeof Snowflake> = (args: SnowflakePropsI) => (
  <x.div display="flex" gap="20px">
    <Snowflake {...args} />
    <Snowflake {...args} fill="red.500" />
    <Snowflake {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
