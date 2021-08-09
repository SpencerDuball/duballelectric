import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { UserTimes, UserTimesPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/UserTimes",
  component: UserTimes,
} as ComponentMeta<typeof UserTimes>;

const Template: ComponentStory<typeof UserTimes> = (args: UserTimesPropsI) => (
  <x.div display="flex" gap="20px">
    <UserTimes {...args} />
    <UserTimes {...args} fill="red.500" />
    <UserTimes {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
