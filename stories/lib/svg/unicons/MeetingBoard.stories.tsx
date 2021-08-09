import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { MeetingBoard, MeetingBoardPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/MeetingBoard",
  component: MeetingBoard,
} as ComponentMeta<typeof MeetingBoard>;

const Template: ComponentStory<typeof MeetingBoard> = (
  args: MeetingBoardPropsI
) => (
  <x.div display="flex" gap="20px">
    <MeetingBoard {...args} />
    <MeetingBoard {...args} fill="red.500" />
    <MeetingBoard {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
